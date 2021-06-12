t = -3:0.001:3;

sig1 = (1-exp(-t))./(2*exp(-t));
sig2 = (1-exp(-2*t))./(2*exp(-t));
sig3 = (1-exp(-3*t))./(2*exp(-t));

figure
subplot(1,3,1)
plot(t,sig1,'r --')
title('prvi signal, x=1')
xlim([-5 5])
ylim([-5 5])

subplot(1,3,2)
plot(t,sig2,'g-.')
title('drugi signal, x=2')
xlim([-5 5])
ylim([-5 5])

subplot(1,3,3)
plot(t,sig3,'k:')
title('treci signal, x=3')
xlim([-5 5])
ylim([-5 5])
