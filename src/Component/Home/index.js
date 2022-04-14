import React from "react";
import { Container } from "reactstrap";

const Home = () => {
    const [number, setNumber] = React.useState([
        12, 444, 54643, 3155, 667543, 8637, 0, 369, 7516, 335,
    ]);
    const [isFirstGet, setFirstGet] = React.useState(true);
    const handleGetMax = (data) => {
        let max = (arr) => Math.max(...data);
        let result = String(max()).length;
        let z;
        for (let i = 0; i < data.length; i++) {
            data[i] = `${data[i]}`;
            const total = [
                ...Array(Number(result) - Number(String(data[i]).length)),
            ].map(() => "*");

            let sum = "";
            for (let i = 0; i < total.length; i++) {
                sum += total[i];
            }
            data[i] = `${sum}${data[i]}`;
        }
        return setNumber([...data]);
    };
    React.useEffect(() => {
        if (isFirstGet) {
            handleGetMax(number);
            setFirstGet(false);
        }
    }, [isFirstGet]);
    return (
        <div>
            <Container>
                <h1 style={{ marginBottom: 50 }}>Dynamic Table</h1>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        padding: "0 30px",
                        width: "920px",
                        margin: "auto",
                    }}
                >
                    {number.map((item, key) => {
                        return (
                            <div
                                key={key}
                                style={{
                                    fontWeight: 600,
                                    fontSize: 34,
                                    width: "25%",
                                    padding: 20,
                                }}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
                <div></div>
            </Container>
        </div>
    );
};
export default Home;
