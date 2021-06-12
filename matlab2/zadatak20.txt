f0 = 4;
t = 0:0.01:2/f0;
s = 3.9*cos(2*pi*f0*t);

mins = -4;
maxs = 4;

deltaQ1 = (maxs-mins)/16;
deltaQ2 = (maxs-mins)/8;
deltaQ3 = (maxs-mins)/4;

s_kvantizovan1 = deltaQ1 * (s/deltaQ1+0.5);
s_kvantizovan2 = deltaQ2 * (s/deltaQ2+0.5);
s_kvantizovan3 = deltaQ3 * (s/deltaQ3+0.5);

figure 
plot(t,s_kvantizovan1)
hold on
plot(t, s-s_kvantizovan1, 'r')

figure 
plot(t,s_kvantizovan2)
hold on
plot(t, s-s_kvantizovan2, 'r')

figure 
plot(t,s_kvantizovan3)
hold on
plot(t, s-s_kvantizovan3, 'r')



