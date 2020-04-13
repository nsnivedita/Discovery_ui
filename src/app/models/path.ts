export class Path {
    planet_origin_id: string;
    planet_origin_name: string;
    planet_destination_id: string;
    planet_destination_name: string;
    path: Array<any>;

    constructor(sid: string,sname:string,did: string,dname: string,path: Array<any>){

        this.planet_origin_id = sid;
        this.planet_origin_name = sname;
        this.planet_destination_id = did;
        this.planet_destination_name = dname;
        this.path = path;
    }
}
