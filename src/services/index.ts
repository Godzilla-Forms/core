import {GodzillaFormCombinedValues} from "../model";

export abstract class GodzillaService {
}

export abstract class GodzillaDataService extends GodzillaService {
  abstract getData(): Promise<GodzillaFormCombinedValues[]>;
}
