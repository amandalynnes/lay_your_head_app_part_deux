import axios from "axios";

class API {
    axiosInstance = null;

    constructor() {
       
        const axiosInstance = axios.create({
            baseURL: "https://layyourhead-93416.firebaseio.com",
            timeout: 30000,
            headers: { Authorization: `Bearer ${getToken()}` },
        });

        
        axiosInstance.interceptors.request.use(
            (config) => ({
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${getToken()}`,
                },
            }),
            (error) => Promise.reject(error)
        );

        
        axiosInstance.interceptors.response.use(
            ({ data }) => data,
            (error) => Promise.reject(error)
        );

        this.axiosInstance = axiosInstance;
    }

// This is a template!! :]
    async updateUserInfo({username,about, displayName}) {
        try {
        const result = await this.axiosInstance.post(`/v1beta2/{parent=projects/*/databases/*/collectionGroups/*}/indexes`,{
         //whatever info we want to create it should match however our data is structured in our database
         //example data below
            name :{
                first : "Ada",
                last : "Lovelace"
            },
            born : 1815,
            rooms : {
                0 : "Software Chat",
                1 : "Famous Figures",
                2 : "Famous SWEs"
            }
        }
    
        );
        return result;
      } catch (err) {
        console.error(err);
        throw err;
      }
     }

}

export default new API();