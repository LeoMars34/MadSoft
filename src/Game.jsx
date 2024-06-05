import React, { useState } from 'react';
import { Timer } from './Timer';
import { Link } from 'react-router-dom';

export function Game() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);

    const questions = [
        {
            title: 'Что такое React?',
            variants: [
                'Библиотека',
                'Язык программирования',
                'Топливо из будущего',
                'Заклинание для улучшения реакции',
            ],
            correct: 0,
        },
        {
            title: 'Что такое TS?',
            variants: [
                'Библиотека',
                'Язык программирования',
                'Топливо из будущего',
                'Заклинание для улучшения реакции',
            ],
            correct: 1,
        },
        {
            title: 'Что такое Димексид?',
            variants: [
                'Лекарственный препарат',
                'Герой из Мстителей',
                'Растение из Азии',
                'Рефлюксное заболевание',
            ],
            correct: 0,
        },
        {
            title: 'Кто такой кентавр?',
            variants: [
                'Рэйпер',
                'Сосед напротив',
                'Продавец из Бристоли',
                'Мифическое существо',
            ],
            correct: 3,
        },
        {
            title: 'Пуэр это - ...',
            variants: [
                'Фирментированный чай',
                'Футболка из Китая',
                'Индийский остров',
                '13 зарплата',
            ],
            correct: 0,
        },
    ];
    const question = questions[step];
    const percentage = Math.round((step / questions.length) * 100);

    function onClickVariant(index) {
        setStep(step + 1);
        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    }

    function Qustions() {
        return (
            <div>
                <h1>{question.title}</h1>
                <ul>
                    {question.variants.map((text, index) => (
                        <li
                            onClick={() => {
                                onClickVariant(index);
                            }}
                            key={index}
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    function Result() {
        return (
            <div>
                <section className="sectionResult">
                    <h2>
                        Правльных ответов {correct} из {questions.length}
                    </h2>
                    <Link to="/Home">
                        <button>Попробовать снова</button>
                    </Link>
                </section>
            </div>
        );
    }

    function Stepper() {
        return (
            <div className="sectionStepper">
                <div
                    style={{
                        width: `${percentage}%`,
                    }}
                    className="progress"
                ></div>
            </div>
        );
    }
    return (
        <div className="container">
            <section className="section">
                {step !== questions.length ? <Timer /> : null}
                {step !== questions.length ? <Stepper /> : null}
                {step !== questions.length ? <Qustions /> : <Result />}
            </section>
        </div>
    );
}
