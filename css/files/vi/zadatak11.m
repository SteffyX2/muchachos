f0 = 1;
t = 0:0.01:0.5/f0;
sig1 = cos(2*pi*f0*t);
sig2 = cos(2*pi*f0*t-pi/6);
sig3 = cos(2*pi*f0*t-pi/8);
sig4 = cos(2*pi*f0*t-3*pi/16);
sig5 = cos(2*pi*f0*t-pi/4);

figure

plot(t,sig1,'r:','linewidth', 3)
hold on
plot(t,sig2,'k-.','linewidth', 3)
hold on
plot(t,sig3,'g','linewidth', 3)
hold on
plot(t,sig4,'c--','linewidth', 3)
hold on
plot(t,sig5,'b','linewidth', 3)
grid on

