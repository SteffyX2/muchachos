 x = [1, 2, 3, 4, 5];
 y = [0, 0, 1, 0, 0];
 x2 = [1, 100, 110, 120, 130]; 
 y2 = [0, 1, 3, 1, 0];
 figure
 subplot(2,2,1)
 plot(x,y,'r')
 title('grafikon x,y')
 hold on
 subplot(2,2,3)
 plot(x2,y,'k--')
 title('grafikon x2,y')
 subplot(1,2,2)
 plot(x2,y2,'c-.')
 title('grafikon x2,y2')