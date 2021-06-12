sekvenca =[1 1 0 0 1];
A = 2;
T = 0.2;
f = [10,20];

[s, t] = zadatak125(sekvenca, A, f, T);
figure
plot(t,s)