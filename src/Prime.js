function Prime() {
    function formSubmit(event) {
        event.preventDefault();
        let formTag = event.target;
        let Min = formTag.minin.value;
        let Max = formTag.maxin.value;
        let arr = [];
        for (let num = Number(Min); num <= Number(Max); num++) {
            if (num <= 1) {
            }
            else {
                let flag = true
                for (let i = 2; i < num; i++) {
                    if (num % i == 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    arr.push(num);

                }
            }
        }
        alert(arr);
        
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                Min : <input type="number" name="minin" />
                Max : <input type="number" name="maxin" />
                <button>Check Primes</button>
            </form>
        </div>
    )
}
export default Prime;