function [s, t] = zadatak126(sekvenca, A, f, fi, T)
deltaT = 0.001; 
ti = deltaT:deltaT:T;
s = []; t = [];
for i = 1:length(sekvenca)
    indeks = sekvenca(i)+1;
    s = [s A*cos(2*pi*f*ti+fi(indeks))];
    t = [t ti+(i-1)*T];
end