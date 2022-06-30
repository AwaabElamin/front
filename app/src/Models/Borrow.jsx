import axios from 'axios';
const URL = "http://localhost:3001/borrow";
const header = {
    headers: {
        authorization: 'Brear ' + localStorage.getItem('token')
    }
}
export async function borrowBook(borrowDetails) {
    let result =
        await axios.post(URL, borrowDetails, header)
            .then(res => {
                return res.data;
            })
            .catch(err => 'error:-\n' + err);
    return result;
}

export async function GetBorrows() {
    let result =
        await axios.get(URL,header)
            .then(res => {
                return res.data;
            })
            .catch(err => 'error:-\n' + err);
    return result;
}