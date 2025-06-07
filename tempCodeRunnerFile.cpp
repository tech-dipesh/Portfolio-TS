#include <iostream>
using namespace std;
int main(){
   int array[10]={2, 9, 37, 19, 27, 42, 13, 12, 49, 91};
   int len=10;
   for(int i=0;i<len-1;i++){
      int min=i;
      for(int j=i+1;j<len;j++){
        if(array[j]<array[min])
            min=j;
      }
      int temp=array[i];
      array[i]=array[min];
      array[min]=temp;
   }
for(int i=0;i<10;i++){
  cout<<array[i]<<" ";
}
return 0;
}