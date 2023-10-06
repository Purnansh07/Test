function C4()
{
    const names = ["Purnansh", "Arinjay", "Dhruv", "Vishwas", "Harsh", "Divyam"];

    const ListName = () => {
        return names.map((val,ind) => {
            return <li key = {ind}>{val}</li>
        })
    }
    return (
        <div>
            <ol type = "A">
                {ListName()}
            </ol>
        </div>
    )
}
export default C4;