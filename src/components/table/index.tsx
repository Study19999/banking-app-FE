import '../table/index.css';
import { TableProps } from "./type";

export const Table: React.FC<TableProps> = ({ headers, data }) => {
    return (
        <table className="table-main">
            <thead>
                <tr>
                    {headers.map(header => (
                        <th className="table-header" key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data?.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, cellIndex) => (
                            <td className="table-data" key={cellIndex}>{cell} </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
