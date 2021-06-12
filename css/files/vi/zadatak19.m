f0= 3;
t = 0:0.01:4/f0;
s=15.9*cos(2*pi*f0*t);

mins = -16;
maxs=16;
deltaQ1 = (maxs-mins)/16;
deltaQ2 = (maxs-mins)/8;
deltaQ3 = (maxs-mins)/4;

s_kvantizovan1 = deltaQ1 * floor(s/deltaQ1)+0.5*deltaQ1;
s_kvantizovan2 = deltaQ2 * floor(s/deltaQ2)+0.5*deltaQ2;
s_kvantizovan3 = deltaQ3 * floor(s/deltaQ3)+0.5*deltaQ3;

figure
plot(t, s_kvantizovan1,'b')
hold on
plot(t, s-s_kvantizovan1, 'r')
ylim([-16 16])

figure
plot(t, s_kvantizovan2,'b')
hold on
plot(t, s-s_kvantizovan2, 'r')
ylim([-16 16])

figure
plot(t, s_kvantizovan3,'b')
hold on
plot(t, s-s_kvantizovan3, 'r')
ylim([-16 16])

