import LoginInfo from "../Objects/LoginInfo";
import OrgInfo from "../Objects/OrgInfo";
import RegInfo from "../Objects/RegInfo";
import ChangeDataInfo from "../Objects/ChangeDataInfo";
import BranchInfo from "../Objects/BranchInfo";
import axios from 'axios';
import ErrorSuccessObject from "../Objects/ErrorSuccessObject";
import ServiceInfo from "../Objects/ServiceInfo";

class OrganisationRepository {
    async login(loginInfo: LoginInfo) {
        await axios.post("/api/v1/organisation/registration", loginInfo)
            .then(response => {
                localStorage.setItem('authToken', response.data.authToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
            })
            .catch(error => {
                console.log(error);
            })
    }

    async registration(orgInfo: RegInfo) {
        await axios.post("/api/v1/organisation/authorization", orgInfo)
            .then(response => {
                localStorage.setItem('authToken', response.data.authToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
            })
            .catch(error => {
                console.log(error);
            })
    }

    async removeOrganisation(loginInfo: LoginInfo) {
        await axios.post("/api/v1/organisation/removeOrganisation", loginInfo)
            .catch(error => {
                console.log(error);
            })
    }

    getPersonalData(): Promise<OrgInfo> {       
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
          }
        return axios.get("/api/v1/organisation/getPersonalData", {headers})
          .then(response => response.data)
          .catch(error => {console.log(error);})
    }

    changePersonalData(orgInfo: OrgInfo): Promise<ChangeDataInfo> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post("/api/v1/organisation/changePersonalData", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    addBranch(branchInfo: BranchInfo): Promise<ErrorSuccessObject> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
       return axios.post("/api/v1/organisation/addBranch", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    removeBranch(branchID: Number): Promise<ErrorSuccessObject> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post("/api/v1/organisation/removeBranch", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    getBranches(): Promise<BranchInfo[]> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post("/api/v1/organisation/getBranches", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    addService(): Promise<ErrorSuccessObject> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post("/api/v1/organisation/addService", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    removeService(): Promise<ErrorSuccessObject> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post("/api/v1/organisation/removeService", {headers})
            .then(response => response.data)
            .catch(error => console.log(error)) 
    }


    getServices(): Promise<ServiceInfo[]> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post("/api/v1/organisation/getServices", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }

    refreshToken(): Promise<String> {
        const headers = {
            'Authorization': 'Token ' + localStorage.getItem('authToken')
        }
        return axios.post("/api/v1/token/refresh_token", {headers})
            .then(response => response.data)
            .catch(error => console.log(error))
    }
}