export default function MiniTable({firstcolumn_name,secondcolumn_name, 
                                   thirdcolumn_name=null, fourthcolumn_name=null,
                                   firstrow_name, secondrow_name, thirdrow_name, fourthrow_name=null,
                                   firstrow_value, secondrow_value, thirdrow_value, fourthrow_value=null
                                   }){
    return (
        <table className="min-w-20 bg-white rounded-lg">
            <thead>
                <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">{firstcolumn_name}</th>
                <th className="px-4 py-2 border-b">{secondcolumn_name}</th>
                {thirdcolumn_name && (
                    <th className="px-4 py-2 border-b">{thirdcolumn_name}</th>
                )}
                {fourthcolumn_name && (
                    <th className="px-4 py-2 border-b">{fourthcolumn_name}</th>
                )}
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="px-4 py-2 border-b">1</td>
                <td className="px-4 py-2 border-b">{firstrow_name}</td>
                <td className="px-4 py-2 border-b">{firstrow_value}</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b">{secondrow_name}</td>
                <td className="px-4 py-2 border-b">{secondrow_value}</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border-b">3</td>
                <td className="px-4 py-2 border-b">{thirdrow_name}</td>
                <td className="px-4 py-2 border-b">{thirdrow_value}</td>
                </tr>
                {fourthrow_name && (
                    <tr>
                    <td className="px-4 py-2 border-b">4</td>
                    <td className="px-4 py-2 border-b">{fourthrow_name}</td>
                    <td className="px-4 py-2 border-b">40</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}