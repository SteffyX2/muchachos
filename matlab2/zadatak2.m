x = [1,2,3,4,5];
y1 = [5,4,-3,2,2];
y2 = [-2,5,5,5,2];
figure
plot(x,y1,'ro--')
hold on 
plot(x,y2,'k:')
xlim([0 6])
ylim([-4 6])
ylabel('amplituda(V)')
xlabel('vreme(s)')
legend('signal1','signal2')
