import { InMemoryDbService } from 'angular-in-memory-web-api';


//does this need to be typed?
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contractpartijen = [
      {id: 70002, name: "VGZ", role: 0, tag: 4},
      {id: 70003, name: "Multizorg", role: 0, tag: 5},
      {id: 70004, name: "CVZ", role: 0, tag: 0},
      {id: 70005, name: "Zilveren Kruis", role: 0, tag: 1},
      {id: 70006, name: "AGIS", role: 0, tag: 0},
      {id: 70007, name: "AWBZ", role: 0, tag: 0},
      {id: 70008, name: "Azivo", role: 0, tag: 0},
      {id: 70009, name: "CZ", role: 0, tag: 2},
      {id: 70010, name: "DSW", role: 0, tag: 0},
      {id: 70011, name: "Menzis", role: 0, tag: 3},
      {id: 70012, name: "CZ Buitenlandse verzekerden", role: 0, tag: 0},
      {id: 70013, name: "De Friesland", role: 0, tag: 0},
      {id: 70014, name: "RBVZ", role: 0, tag: 0},
      {id: 70015, name: "Dienst Justitiele Inrichtingen", role: 0, tag: 0},
      {id: 70016, name: "Regeling Zorg Asielzoekers", role: 0, tag: 0},
      {id: 70017, name: "Restgroep geen declaratie", role: 0, tag: 0},
      {id: 70018, name: "Restgroep onbekend", role: 0, tag: 0},
      {id: 70019, name: "Uvit niet-preferent", role: 0, tag: 0},
      {id: 70020, name: "Zorg en zekerheid", role: 0, tag: 6},
      {id: 70021, name: "Eigen prijslijst", role: 0, tag: 0},
      {id: 70022, name: "UZOVI 0001", role: 0, tag: 0},
      {id: 70023, name: "NFinance", role: 0, tag: 0},
      {id: 70024, name: "Actiemateriaal Switchen Zorgpolis", role: 0, tag: 0},
      {id: 70025, name: "Medicatie+Zorg", role: 0, tag: 0},
      {id: 70026, name: "UZOVI 5701", role: 1, tag: 0},
      {id: 70027, name: "Caresq", role: 0, tag: 0},
      {id: 70028, name: "VRZ Zorginkoop (ONVZ en ENO)", role: 0, tag: 7},
      {id: 70029, name: "NIET GEBRUIKEN", role: 0, tag: 0},
      {id: 70030, name: "ASR- DSW", role: 0, tag: 0}
      ];
    return {contractpartijen};
  }
}
