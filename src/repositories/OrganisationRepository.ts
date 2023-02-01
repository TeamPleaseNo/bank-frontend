import LoginInfo from "../Objects/LoginInfo";
import OrgInfo from "../Objects/OrgInfo";
import RegInfo from "../Objects/RegInfo";
import ChangeDataInfo from "../Objects/ChangeDataInfo";
import BranchInfo from "../Objects/BranchInfo";
import axios from 'axios';
import ErrorSuccessObject from "../Objects/ErrorSuccessObject";
import ServiceInfo from "../Objects/ServiceInfo";

const url = "http://194.67.97.8";


class OrganisationRepository {

    async registration(regInfo: RegInfo) {
        await axios.post(url + "/api/v1/organisation/registration", regInfo)
            .then(response => {
                localStorage.setItem('authToken', response.data.authToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
            })
            .catch(error => {
                console.log(error.request);
            })
    }

    async login(logInfo: LoginInfo) {
        await axios.post(url + "/api/v1/organisation/authorization", logInfo)
            .then(response => {
                localStorage.setItem('authToken', response.data.authToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    removeOrganisation(loginInfo: LoginInfo) {
        axios.post(url + "/api/v1/organisation/removeOrganisation", loginInfo)
            .catch(error => {
                console.log(error);
            })
    }

    getPersonalData(): Promise<OrgInfo> {       
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
          }
        return axios.get(url + "/api/v1/organisation/getPersonalData", {headers})
          .then(response => response.data)
          .catch(error => {console.log(error);})
    }

    changePersonalData(orgInfo: OrgInfo): Promise<ChangeDataInfo> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post(url + "/api/v1/organisation/changePersonalData", orgInfo, {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    addBranch(branchInfo: BranchInfo): Promise<ErrorSuccessObject> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
       return axios.post(url + "/api/v1/organisation/addBranch", branchInfo, {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    removeBranch(branchID: Number): Promise<ErrorSuccessObject> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post(url + "/api/v1/organisation/removeBranch", branchID, {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    getBranches(): Promise<BranchInfo[]> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post(url + "/api/v1/organisation/getBranches", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    addService(): Promise<ErrorSuccessObject> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post(url + "/api/v1/organisation/addService", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    removeService(): Promise<ErrorSuccessObject> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post(url + "/api/v1/organisation/removeService", {headers})
            .then(response => response.data)
            .catch(error => console.log(error)) 
    }


    getServices(): Promise<ServiceInfo[]> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post(url + "/api/v1/organisation/getServices", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    refreshToken(): Promise<String> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post(url + "/api/v1/token/refresh_token", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }
}

const repository = new OrganisationRepository();
export default repository;