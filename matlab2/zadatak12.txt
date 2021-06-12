t = 0:0.01:0.5;

sig1 = sinus(t,4,1,0);
sig2= sinus(t,1,2,pi/4);
sig3 = sinus(t,2,4,0);
sig4 = sinus(t,0.7,8,pi/2);

figure
plot(t,sig1,'r')
hold on
plot(t,sig2,'b')
plot(t,sig3,'g')
plot(t,sig4,'k')

figure
subplot(4,1,1)
plot(t,sig1)
subplot(4,1,2)
plot(t,sig2)
subplot(4,1,3)
plot(t,sig3)
subplot(4,1,4)
plot(t,sig4)