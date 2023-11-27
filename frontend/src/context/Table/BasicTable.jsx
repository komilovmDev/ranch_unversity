import './BasicTable.scss'

export default function BasicTable() {
    return (
        <div className="BasicTable">
            <table>
                <thead>
                    <tr>
                        <th>Sertifikat turi</th>
                        <th>Talim tili</th>
                        <th>Imtiyoz</th>
                        <th>Izoh</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>IELTS 7,0 ball (CEFR –C1)</td>
                        <td>Ingliz tili yo'nalishi bo'yicha</td>
                        <td>Grant</td>
                        <td>Universitet tomonidan stipendiya tayinlanadi</td>
                    </tr>
                    <tr>
                        <td>TRKI III C1</td>
                        <td>Rus tili yo'nalishi bo'yicha</td>
                        <td>Grant</td>
                        <td>Universitet tomonidan stipendiya tayinlanadi</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}