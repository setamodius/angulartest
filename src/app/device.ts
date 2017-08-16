export class Device {
    id: string;
    config: string;
    readonly sendmessage: string;
    constructor (id: string, config: string)   {
        this.id = id;
        this.config = config;
        this.sendmessage = "ptsystem/"  + this.id + "/sendmessage";
    }  
    
    
  }
  