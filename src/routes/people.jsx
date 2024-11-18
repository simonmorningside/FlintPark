import { Form } from "react-router-dom";

export default function People () {
    return (
        <div>
            <h1>Meet the People</h1>
            <p>Flint Foral Neighborhood</p>
            <Form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </Form>
        </div>
    )
}