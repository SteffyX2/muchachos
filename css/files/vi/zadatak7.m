t = -3:0.001:3;
sig = exp(-t.^2).*cos(2*pi*7*t);
figure
plot(t,sig,'g--')
title('Zadatak3')
