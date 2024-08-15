import { useEffect, useMemo, useState } from "react";

export function UseMemo() {

    const [timer, setTimer] = useState(new Date().toLocaleTimeString());
    const [seaechText, setSseaechText] = useState("");

    const [products, setProdcts] = useState(
        [
            {
                id: 1,
                name: "apple",
                price: 123
            },
            {
                id: 2,
                name: "red me",
                price: 1234
            },
            {
                id: 3,
                name: "real me",
                price: 123456
            },
        ]
    );
    const filterdProducts = (seachText) => {
        console.log(seachText);
        return [...products].filter((p) => p.name.toLowerCase().includes(seachText));
    }

    useEffect(() => {
        setInterval(() => {
            // console.log("re render")
            setTimer(new Date().toLocaleTimeString());
        }, 1000);
    })

    let productsAfterSearch = useMemo(() => {
        return filterdProducts(seaechText);
    }, [seaechText, products])



    return (
        <>
            <h2>Tomer : {timer}</h2>
            <input type="text" value={seaechText} onChange={
                (e) => {
                    setSseaechText(() => e.target.value);
                }
            } />
            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsAfterSearch.map((res, idx) => {
                            return (
                                    <tr key={res.id} id={res.name}>
                                        <td >{res.id}</td>
                                        <td >{res.name}</td>
                                        <td >{res.price}</td>
                                    </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </>
    )
}