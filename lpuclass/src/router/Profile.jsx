import React from 'react';
import { useSearchParams }  from 'react-router';

export default function Profile() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    const age = searchParams.get('course');

    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Name: {name}</h2>
            <h2>Course: {course}</h2>
        </div>
    );
}