function generateFlag() {
    const randomFlags = [
        "CyberXbytes{tr1cked_y0u_1}",
        "CyberXbytes{n0t_qu1te_1t}",
        "CyberXbytes{g00d_luck_next_time}",
        "CyberXbytes{wR0ng_fl4g}",
        "CyberXbytes{trY_a9ain}",
        "CyberXbytes{keEp_L00kinG}",
        "CyberXbytes{Almost_th3rE}",
        "CyberXbytes{y0u_m1ssed_1t}",
        "CyberXbytes{just_a_b1t_m0re}",
        "CyberXbytes{another_red_herr1ng}",
        "CyberXbytes{bett3r_luck_next}",
        "CyberXbytes{missed_aga1n}",
        "CyberXbytes{st1ll_wrong}",
        "CyberXbytes{nice_try_th0ugh}",
        "CyberXbytes{hmm_1nteresting}",
        "CyberXbytes{b4d_gu3ss}",
        "CyberXbytes{g0od_try}",
        "CyberXbytes{not_th3_right_one}",
        "CyberXbytes{try0_again}",
        "CyberXbytes{anoth3r_m1stake}"
    ];

    const randomIndex = Math.floor(Math.random() * randomFlags.length);
    document.getElementById("flag-output").innerText = randomFlags[randomIndex];
}

console.log("yOU _wON}");
