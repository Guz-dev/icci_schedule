export default function ClaveHora({hora}){
    return(    
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700">
            {hora[0]} - {hora[1]}
        </td>
    )
}