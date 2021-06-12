t = -9:0.01:9;
A = 4;
tau = 3;

y1 = impuls(t+4,4,tau);
y2 = impuls(t-5,4,tau);
y3 = impuls(2*t,4,tau);
y4 = impuls(t/3,4,tau);
y5 = impuls(-t+5,4,tau);
y6 = impuls(-t/2+1,4,tau);

figure
subplot(6,1,1)
plot(t,y1,'linewidth',3)
ylim([-0.2-A 0.2+A])

subplot(6,1,2)
plot(t,y2,'linewidth',3)
ylim([-0.2-A 0.2+A])

subplot(6,1,3)
plot(t,y3,'linewidth',3)
ylim([-0.2-A 0.2+A])

subplot(6,1,4)
plot(t,y4,'linewidth',3)
ylim([-0.2-A 0.2+A])

subplot(6,1,5)
plot(t,y5,'linewidth',3)
ylim([-0.2-A 0.2+A])

subplot(6,1,6)
plot(t,y6,'linewidth',3)
ylim([-0.2-A 0.2+A])