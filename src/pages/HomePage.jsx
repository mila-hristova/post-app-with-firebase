import { useEffect } from "react";

export default function HomePage() {
    useEffect(() => {
        const url =  
        "https://react-crud-10294-default-rtdb.firebaseio.com//posts.json";
    }, []);
    
    return (
        <section className="page">
            <h1>Home Page</h1>
            <p>Home is where the heart is 💛</p>
            <p>Oh My, sounds like a bad movie!</p>
        </section>
    );
}