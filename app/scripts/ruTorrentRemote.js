import axios from 'axios'
import qs from 'qs'
import jsonToFormData from 'json-form-data'
import {ThrowNotification, ToBytes, ToSpeed} from './utilities'

export class ruTorrentRemote {
    constructor(parameters) {
        let {username, password, url} = parameters;
        
        if (!username || !password || !url)
            return;
        this.cid = 0;
        this.data = [];
        this.url = url.replace(/\/$/);

        this.config = {
            auth: {
                username,
                password
            }
        };
    }

    async AddTorrent(parameters) {
        let {url, path, label} = parameters;

        if (url.startsWith('magnet')) {
            var json = {
                dir_edit: path || '',
                tadd_label: label || '',
                url: url
            };
            var response = await axios.post(this.url + '/php/addtorrent.php', jsonToFormData(json), this.config);
            if (response.status == 200)
                return true;
            return false;
        }
        else if (url.startsWith('http')) {
            let file = await axios.get(url, { responseType: 'blob' });
            if (file.data.type != 'application/x-bittorrent') 
                return ThrowNotification('Link is not a torrent or magnet');  
            var json = {
                dir_edit: path || '',
                tadd_label: label || '',
                torrent_file: new File([file.data], Date.now().toString())
            };
            var response = await axios.post(this.url + '/php/addtorrent.php', jsonToFormData(json), this.config);
            if (response.status == 200)
                return true;
            return ThrowNotification('Didn\'t get Status 200');
        }
        else {
            return ThrowNotification('Unrecognized URL resource');
        }
    }

    async GetTorrents() {
        let response = await axios.post(this.url + '/plugins/httprpc/action.php', qs.stringify({'mode': 'list', 'cmd': 'd.custom=addtime'}), this.config);
        
        if (response.status != 200) { }

        if (response.data.cid == this.cid)
            return this.data;
        this.data = [];

        for (var hash in response.data.t) {
            var info = response.data.t[hash];
            var torrent = {
                name: info[4],
                status: "Unknown",
                size: ToBytes(info[5]),
                done: +(info[8] / info[5] * 100).toFixed(2),
                downloaded: ToBytes(+info[8]),
                uploaded: ToBytes(+info[9]),
                ratio: +(info[10] / 1000).toFixed(3),
                ul: ToSpeed(+info[11]),
                dl: ToSpeed(+info[12]),
                added: info[34]
            };
            if (torrent.done > 0) {
                torrent.status = 'Downloading';
            }
            if (torrent.done == 100) {
                torrent.status = 'Seeding';
            }
            if (torrent.done == 0) {
                torrent.status = 'Started';
            }
            torrent.done = torrent.done + '%';
            this.data.push(torrent);
        }
        return this.data;
    }
}