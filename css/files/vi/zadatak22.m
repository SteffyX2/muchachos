sekvenca = [0 1 0 1];
A=[-3 3];
T = 1;
deltaT=0.01;

[s,t] = zadatak122(sekvenca, A, T, deltaT);
figure
plot(t, s, 'r -.')
ylim([min(A)-1 max(A)+1])