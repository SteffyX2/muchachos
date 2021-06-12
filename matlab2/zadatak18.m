f0 = 3;
t = 0:0.01:4/f0;
s = 4*cos(2*pi*f0*t);

T1 = 0.02;
T2 = 0.06;
T3 = 0.12;

t1 = 0:T1:3/f0;
t2 = 0:T2:3/f0;
t3 = 0:T3:3/f0;

s_odabran1 = 4*cos(2*pi*f0*t1);
s_odabran2 = 4*cos(2*pi*f0*t2);
s_odabran3 = 4*cos(2*pi*f0*t3);

figure
plot(t,s)
hold on
stem(t1,s_odabran1, 'r')
figure
plot(t,s)
hold on
stem(t2,s_odabran2, 'r')
figure
plot(t,s)
hold on
stem(t3,s_odabran3, 'r')
