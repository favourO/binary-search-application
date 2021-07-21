const findMedianSortedArrays = (nums1, nums2) => {
    let arr = [];
    //const nums1 = [2, 3, 4, 5], nums2 = [9, 8, 7, 10];
    let totalLen = nums1.length + nums2.length;
    let i = 0, j = 0, n = nums1.length, m = nums2.length;
    //Check if any of the arrays are empty
    if (totalLen === 0) {
        return 0;
    }    

    while(arr.length < totalLen) {
        if(i < n && j < m) {
            if(nums1[i] <= nums2[j]) {
                arr.push(nums1[i]);
                i++;
            }
            else {
                arr.push(nums2[j]);
                j++;
            }
        }
        else if (i >= n) {
            arr.push(nums2[j]);
            j++;
        }
        else{
            arr.push(nums1[i]);
            i++;
        }
    }

    // let y = arr.length/2;
    // const x = y - 1
    // const z = (arr[x]+arr[y])/2
    // const a = Math.floor(y);
    
    //console.log(Math.floor(arr.length/2) - 1)
    // if (arr.length % 2 === 0) {
    //     console.log(arr[y])
    // }else {
    //     console.log(arr[a])
    // }
    // return 8 % 2 === 0 ? arr[y] : arr[a];
    // return ? 
    // : arr[Math.floor(arr.length/2)];

    for (let p = 0; p < arr.length; p++) {
        console.log(arr[p])
    }
}


const ni = [2, 3, 4, 5], mi = [9, 8, 7, 9];
//console.log();
findMedianSortedArrays(ni, mi);
//const n = [2, 3, 4, 5, 6], mi = [9, 8, 7];
// const total = n.length;
// const median = (n[(total/2) - 1] + n[(total/2)])/2
// console.log(n[Math.floor(total/2)]);