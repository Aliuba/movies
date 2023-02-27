import {apiService} from "./apiService";
import {urls} from "../configs";

const genderService={
    getAllGenders:()=>apiService.get(urls.genres)

}

export {
    genderService
}