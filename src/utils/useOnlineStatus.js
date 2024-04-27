import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, SetOnlineStatus] = useState(true);

    //check if online
    useEffect(() => {
        //event listener jobs for keep tracking the when the internet is online or offline and return the status back
        window.addEventListener("offline", () => {
            SetOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            SetOnlineStatus(true);
        });

    }, []);

    //return boolean value
    return onlineStatus;
}
export default useOnlineStatus;
//in this we dont need extra info, chck only if online then return bolean
