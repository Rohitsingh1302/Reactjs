import React from "react";
import { useParams } from "react-router";

export default function UserProfile() {
    const { id } = useParams();
    return (
        <div>
            <h1>User Profile Page</h1>
            <h2>User ID: {id}</h2>
        </div>
    );
}