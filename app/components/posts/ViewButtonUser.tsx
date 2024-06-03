'use client'

const ViewButtonUser = () => {
    const handleClick = () => alert('Apakah Anda Yakin?');

    return (
        <>
        <button onClick={handleClick}>Lihat User</button>
        </>
    )
}

export default ViewButtonUser;