import NumberFormat from 'react-number-format';

const Tabel = ({provinsi ,kasusPositif, kasusSembuh, kasusMeninggal}) => {
    return (
        <>
            {provinsi}
            <NumberFormat value={kasusPositif} displayType={'text'} thousandSeparator={true} renderText={kasusPositif => <div>{kasusPositif}</div>}>{kasusPositif}</NumberFormat>
            <NumberFormat value={kasusSembuh} displayType={'text'} thousandSeparator={true} renderText={kasusSembuh => <div>{kasusSembuh}</div>}>{kasusSembuh}</NumberFormat>
            <NumberFormat value={kasusMeninggal} displayType={'text'} thousandSeparator={true} renderText={kasusMeninggal => <div>{kasusMeninggal}</div>}>{kasusMeninggal}</NumberFormat>   
        </>
    
    )
}


export default Tabel;