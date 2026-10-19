
function StatCard(){

    const value = 0;
    const label = 0;
    return(
        <>
        <div className="flex gap-6">
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{value}</p>
            <p className="mt-1 text-lg">Marked as read</p>
          </div>
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{label}</p>
            <p className="mt-1 text-lg">Bookmarks</p>
          </div>
        </div>
        </>
    );
}
export default StatCard;