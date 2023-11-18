import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '../css/ranking.css'

const Ranking = () => {
    const [users, setUsers] = useState();

    const x = useSelector(state => state.rankingReload);

    useEffect(() => {
        getRanking();
    }, [x]);

    const getRanking = () => {
        fetch('/ranking')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }

    return (
        <div name="ranking" className="ranking-container">
            <div className="ranking-header">
                <strong className="ranking-title" >Ranking</strong>
                <img className="header-icon" src="/icons/success.png" />
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Correct Answers</th>
                    </tr>
                </thead>
                <tbody className="table-scroll">
                    {users?.map((element, index) => (
                        <tr key={index} className="text-center">
                            <td>{element.userName}
                                {index == 0 ? <img className="medal" src="/icons/first.png" /> : null}
                                {index == 1 ? <img className="medal" src="/icons/second.png" /> : null}
                                {index == 2 ? <img className="medal" src="/icons/third.png" /> : null}
                            </td>
                            <td><b>{element.points}</b> / 10</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Ranking;
