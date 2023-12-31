function Menu(){
    return(
        <div className='w-full px-2 py-1 bg-neutral-900 text-neutral-200 shadow-md flex flex-row gap-2 justify-center items-center'>
            <a className='px-2 py-1 text-lg'>MyFinance</a>
            <button className='px-2 py-1 rounded-full bg-green-600 border border-green-900 shadow-md h-fit text-sm'>Add income</button>
            <button className='px-2 py-1 rounded-full bg-red-600 border border-red-900 shadow-md h-fit text-sm'>Add expense</button>
            <a className='px-2 py-1 ml-auto text-sm'>About</a>
        </div>
    );
}

export default Menu;