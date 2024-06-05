import { Link } from 'react-router-dom';
import React from 'react';

export function Home() {
    return (
        <div className="container">
            <section className="section">
                <p className="p_Home">
                    В школе проводятся промежуточные аттестации учащихся в
                    формате теста. На его выполнение отводится 5 минут. Как
                    будешь готов нажимай "Начать"
                </p>
                <Link to="/Game">
                    <button>Начать</button>
                </Link>
            </section>
        </div>
    );
}
