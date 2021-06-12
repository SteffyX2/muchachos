t = 0:0.01:2;

sig1 = sin(2*pi*1*t);
sig2 = sin(2*pi*0.5*t);
sig3 = sin(2*pi*2*t);


figure
title('sinusoide')
plot(t,sig1, 'linewidth', 1)
hold on
plot(t,sig2, 'linewidth', 2)
plot(t,sig3, 'linewidth', 3)

legend('1.sinusoida','2.sinusoida','3.sinusoida')
xlabel('vreme(s)')
ylabel('amplituda(V)')


grid on 


