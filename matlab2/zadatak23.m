sekvenca = [0 1 0 1];
A = [-3 3];
T = 1;
[s,t] = zadatak123(sekvenca,A,T);

figure
plot(t, s)
ylim([-4 4])