sekvenca = [1 1 0 0 1];
A =2;
T = 0.2;
f=10;
fi=[pi/2, 3*pi/2];
[s, t] = zadatak126(sekvenca, A, f, fi, T);
figure
plot(t,s)