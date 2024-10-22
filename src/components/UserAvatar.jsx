import { useEffect, useState } from "react";

export default function UserAvatar({ uid }) {
    const [user, setUser] = useState({});

    useEffect (() => {
        getUser();

        async function getUser (){
            const response = await fetch (
                `https://react-crud-10294-default-rtdb.firebaseio.com/users/${uid}.json` 
            );
            const data = await response.json ();

            setUser(data);
        }
    }, [uid]);
    return (
        <div className="avatar">
            <img src={user?.image} alt={user?.id} />
            <span>
                <h3>{user?.name}</h3>
                <p>{user?.title}</p>
            </span>
        </div>
    );
}