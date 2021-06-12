t = -8:0.01:8;
tau = 2;

y1 = impuls2(t+4,tau);
y2 = impuls2(t-5,tau);
y3 = impuls2(2*t,tau);
y4 = impuls2(t/3,tau);
y5 = impuls2(-t+5,tau);
y6 = impuls2(-t/2+1,tau);

figure
subplot(6,1,1)
plot(t,y1,'linewidth',3)
ylim([0 1])
hold on

subplot(6,1,2)
plot(t,y2,'linewidth',3)
ylim([0 1])
hold on

subplot(6,1,3)
plot(t,y3,'linewidth',3)
ylim([0 1])
hold on

subplot(6,1,4)
plot(t,y4,'linewidth',3)
ylim([0 1])
hold on

subplot(6,1,5)
plot(t,y5,'linewidth',3)
ylim([0 1])
hold on

subplot(6,1,6)
plot(t,y6,'linewidth',3)
ylim([0 1])
