
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix){
        var z =[];
        for (i=0; i<matrix.length; i++){
            if(i%2 === 0){
                for(let k=0; k<matrix[i].length; k++){
                    z.push(matrix[i][k]);
                }
            } else {
                for(let k=matrix[i].length-1 ; k>=0; k--){
                    z.push(matrix[i][k]);
                }
            }
        }
        
        return z;
    } else return [];
        
  
}
