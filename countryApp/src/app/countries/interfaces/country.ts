export interface Country {
    //pais: string;
    //capital: string;
    //region: string;
  pais:{
    connon:String;
  };
  capital:String;
  region:String;
  flags:{
    png:String;
    alt:String;
  };
  population:number;
  coatOfArms: {
    svg: string
  }
  }